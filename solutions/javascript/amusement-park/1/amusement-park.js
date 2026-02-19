/// <reference path="./global.d.ts" />
// @ts-check

export function createVisitor(name, age, ticketId) {
  return {name: name, age:  age, ticketId: ticketId}
}

export function revokeTicket(visitor) {
  visitor.ticketId = null
  return visitor
}

export function ticketStatus(tickets, ticketId) {
  if (!(ticketId in tickets)) return 'unknown ticket id'
  if(tickets[ticketId] === null) return 'not sold'
  return `sold to ${tickets[ticketId]}`
}

export function simpleTicketStatus(tickets, ticketId) {
  if(tickets[ticketId]===null || !(ticketId in tickets)) return "invalid ticket !!!"
  return `${tickets[ticketId]}`
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version
}
