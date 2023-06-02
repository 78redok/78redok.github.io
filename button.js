function download(){
    if (confirm ('Thank you for your consideration!')) {
        location.href = './resume.pdf';
        return false;
    }
    return false;
}