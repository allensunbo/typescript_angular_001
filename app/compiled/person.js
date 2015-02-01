var Student = (function () {
    function Student(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Student.prototype.getName = function () {
        return this.firstname + '--' + this.lastname;
    };
    return Student;
})();
//# sourceMappingURL=person.js.map