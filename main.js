console.log("dope");

const DragDropManager = Object.create(null, {
    init: {
      value: () => {
        const stages = document.querySelectorAll(".stage")
  
        stages.forEach(stage => {
          // Gain reference of item being dragged
          stage.ondragstart = e => {
            e.dataTransfer.setData("text", e.target.classList)
          }
        })

        const targets = document.querySelectorAll(".target")
  
        targets.forEach(target => {
          // Dragover not supported by default. Turn that off.
          target.ondragover = e => e.preventDefault()
  
          target.ondrop = e => {
            // Enabled dropping on targets
            e.preventDefault()
  
            // Determine what's being dropped
            const data = e.dataTransfer.getData("text")
  
            // Append card to target component as child
            // TODO: This should only happen if the target has no children nodes



            // this if statement only lets you drag the things into the containers if it doesn't have a child
            // *OR* if its going into the middle section
            if((e.target.hasChildNodes() === false) || (e.target.className === "grid origin target")){
            e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
            }
          }
        })
      }
    }
  })
  
  DragDropManager.init()
  