// // IMPORTANT!!
// // This file is for getting syntax color only!
// // I was too lazy to load it through webpack as a string

// function scrollResponse(scrollPosition){
//     var msg = {
//         type: "scrollPosition",
//         data: scrollPosition
//     }
//     var strMsg = JSN.stringify(msg)
//     try{
//         window.postMessage(strMsg);
//     } catch(error) {
//         console.error(error);
//     }
// }


// window.addEventListener('scroll', function(e) {
//     scrollResponse({
//         x: element.scrollLeft,
//         y: element.scrollTop
//     })
// })