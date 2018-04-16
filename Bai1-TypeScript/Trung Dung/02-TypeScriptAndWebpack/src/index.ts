import{Person} from "./interfaces/person"
import{Student} from "./models/student"

function greeter(person : Person){
    return `Hello ${person.firstName} ${person.lastName}`
}

let student:Student = new Student("Dung","Nguyen","Trung")

document.body.innerHTML = greeter(student);