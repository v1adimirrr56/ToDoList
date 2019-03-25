const ToDoManagerTable = {
    header: ["Номер", "Фамилия", "Имя", "Отчество", "Должность"],
    fieldObject: ["Id", "LastName", "FirstName", "MiddleName", "Position"]
};

const ToDoTask = {
    header: ["Номер", "Заголовок", "Дата создания", "Нормативное время устранения", "Менеджер"],
    fieldObject: ["Id", "Title", "CreateTime", "NormResolutionTime", "Manager"]
};

export {
    ToDoManagerTable,
    ToDoTask
}