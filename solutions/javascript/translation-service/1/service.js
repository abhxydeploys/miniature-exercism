/// <reference path="./global.d.ts" />
// @ts-check

export class TranslationService {

  constructor(api) {
    this.api = api;
  }

  async free(text) {
    let response = await this.api.fetch(text)
    return response.translation
  }

  async batch(texts) {
    if(texts.length === 0) return Promise.reject(new BatchIsEmpty())
    return Promise.all(texts.map((text) => this.free(text)))
  }

  async request(text) {
  // 1. Create a helper function to wrap the callback in a Promise
    const requestTranslation = () => {
      return new Promise((resolve, reject) => {
        this.api.request(text, (error)=> {
          if(error) reject(error)
          else resolve()
        })
      })
    }

    // 2. Implement the retry logic (max 3 attempts total)
    for(let attempt = 1; attempt <= 3; attempt+=1) {
        // If this succeeds, it immediately exits the function and resolves the Promise
        try{
          return await requestTranslation()
        } catch(error){
        // If it fails on the 3rd attempt, we throw (reject) with that final error
          if(attempt === 3) throw error
        }
        // Otherwise, the loop continues to the next attempt
    }
  }
  async premium(text, minimumQuality) {
 
    // Step 1: Attempt the initial fetch
    let response;
    try{
      response = await this.api.fetch(text)
    } catch(error) {
    // Step 2: If it fails (Not Yet Translated), request it, then fetch again
      await this.request(text);
      response = await this.api.fetch(text)
    }
    // Step 3: We now have a response. Check the quality threshold.
    if(response.quality < minimumQuality){
      throw new QualityThresholdNotMet(text)
    }

    // Step 4: If everything is good, return the translation string
    return response.translation
  }
}

export class QualityThresholdNotMet extends Error {
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
    );

    this.text = text;
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
    );
  }
}
 