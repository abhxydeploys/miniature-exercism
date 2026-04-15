class Badge {
    public String print(Integer id, String name, String department) {
        String dept = (department == null) ? "OWNER" : department.toUpperCase();
        if(id == null){
            return String.format("%s - %s", name, dept);
        }
        return String.format("[%d] - %s - %s", id, name, dept);
    }
}
