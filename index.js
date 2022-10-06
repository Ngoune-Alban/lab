function numberChange(event){
    // selon l'organisation de ton code, tu dois passer la bonne valeur à closest pour obtenir l'élément qui contient ton id.
    const id = event.closest("div").getAttribute("data-id");
    const content = event.value;
    console.log(id);
    console.log(content);
}

// https://www.w3schools.com/tags/ev_onchange.asp#:~:text=Definition%20and%20Usage,when%20the%20element%20loses%20focus.

