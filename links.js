
var highlighted = 'about';
var highlighted_sect = 'about-section';

function highlight(el) { // el is 'about' , 'experience', 'projects', or 'contact'
    let sect = el + "-section";
    if (highlighted) {
        //if something is highlighted unhighlight
        document.getElementById(highlighted).style.fontSize = "1em";
        document.getElementById(highlighted_sect).style.display = "none";

    }
    document.getElementById(el).style.fontSize = "2em";
    document.getElementById(sect).style.display = "block"; // el + sect = 'el-sect'
    console.log(sect) ;
    highlighted = el ;
    highlighted_sect = sect
}