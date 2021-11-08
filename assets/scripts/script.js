function setSelected() {
    let selected = document.getElementById("selected")
    console.log(selected)
    if(this !== selected) {
        selected.removeAttribute('id');
        this.document.setAttribute('id', 'selected');
    }
    // todo -- modify selected link id on click
}
