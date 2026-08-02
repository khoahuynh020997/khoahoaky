// Khoa Hoa Kỳ - Website Script

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Khoa Hoa Kỳ đã tải thành công!");

    // Hiệu ứng hiện nội dung
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);

    // Hiệu ứng khi bấm nút
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.style.transform = "scale(0.96)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);
        });
    });
});
