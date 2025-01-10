
moveCursor();

function moveCursor() {
    document.addEventListener('mousemove', (event) => {
    const object = document.querySelector('.mousepoint');
    object.style.left = `${event.pageX}px`;
    object.style.top = `${event.pageY}px`;
    })
}


// }

// function coverExperienceBlock() {
//     const list = document.querySelector('.experience_list')
//     const items = [...list.children]


//     function spanChange() {
//         const spanItems = [...document.querySelectorAll('.experience_item_span')]
//         spanItems.forEach(span => {
//             span.addEventListener('mouseover', (e) => {
//                 const target = e.target
//                 const targetLi = target.closest('li')
//                 const targetDiv = target.closest('div')
//                 const targetDivChildren = [...targetDiv.children]
//                 target.classList.add('experience_item_span_hover')
//                 listOpacityChange(0.3)
//                 targetLi.style.opacity = 1
//                 const h3 = targetDivChildren.find(item => item.tagName === 'H3')
//                 h3.classList.add('experience_h3')
//             })

//             span.addEventListener('mouseout', (e) => {
//                 const target = e.target
//                 target.classList.remove('experience_item_span_hover')
//                 listOpacityChange(1)
//                 const targetDiv = target.closest('div')
//                 const targetDivChildren = [...targetDiv.children]
//                 const h3 = targetDivChildren.find(item => item.tagName === 'H3')
//                 h3.classList.remove('experience_h3')
//             })
//         })
//     }

//     function listOpacityChange(num) {
//     // const list = document.querySelector('.experience_list')
//     const childrenList = [...list.children]
//         childrenList.forEach(item => {
//             item.style.opacity = num
//             })
//     }

//     spanChange()
// } 

// coverExperienceBlock()


