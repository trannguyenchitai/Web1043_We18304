class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.class_id = class_id;
        this.email = email;
        this.phone_number = phone_number;
        this.dob = dob;
    }

    // Phương thức trả về tên đầy đủ của sinh viên
    getFullName() {
        return `${this.last_name} ${this.first_name}`;
    }

    // Phương thức tính số tuổi của sinh viên theo năm
    getAge() {
        const dob = new Date(this.dob);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const month = today.getMonth() - dob.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        return age;
    }

    // Phương thức tính số tuổi của sinh viên theo ngày
    getAgeInDays() {
        const dob = new Date(this.dob);
        const today = new Date();
        const diffTime = Math.abs(today - dob);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return diffDays;
    }
}

// Tạo danh sách sinh viên gồm 5 sinh viên
const students = [
    new Student(1, 'Nguyễn', 'Hoàng', 'nguyenhoang@gmail.com', '0769827164', '2000-01-20'),
    new Student(2, 'Lê', 'Quyết', 'lequyet@gmail.com', '0762718637', '2001-02-21'),
    new Student(3, 'Phan', 'Văn','Toản', 'phanvantoan@gmail.com', '0761748397', '2002-03-22'),
    new Student(4, 'Trần', 'Hiếu', 'tranhieu@gmail.com', '0760271849', '2003-04-23'),
    new Student(5, 'Nguyễn', 'Mạnh', 'Hùng', 'nguyenmanhhung@gmail.com', '0762817493', '2004-05-24')
];

// Sắp xếp danh sách sinh viên theo số tuổi (tính theo ngày) từ thấp đến cao
students.sort((a, b) => a.getAgeInDays() - b.getAgeInDays());

// In ra danh sách sinh viên theo thứ tự sinh viên có số tuổi (tính theo ngày) từ thấp đến cao
console.log('Danh sách sinh viên:');
students.forEach((student) => {
    console.log(`${student.getFullName()} - ${student.getAge()} tuổi (${student.getAgeInDays()} ngày)`);
});

// In ra bao gồm một số thông tin từ BOM như width và height của màn hình
console.log(`Width của màn hình: ${window.innerWidth}`);
console.log(`Height của màn hình: ${window.innerHeight}`);