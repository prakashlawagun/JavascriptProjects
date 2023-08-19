const endDate = "11 Aug 2023 11:00 AM"
document.getElementById("end-date").innerText = endDate;
    const end = new Date(endDate);
const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (now - end) / 1000;
    if (diff < 0) {
        return;
    }
    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    //convert into hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    //convert into second
    inputs[3].value = Math.floor(diff )% 60;
    


    
}
setInterval(() => {
    clock();
}, 1000);