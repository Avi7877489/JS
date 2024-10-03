// Wipro interview qstion

function showMessege(marks){
    const message = marks ?? "Absent"
    // const message = marks || "Absent"
    console.log(`Marks ${message}`)
  }
  
  showMessege(25)
  showMessege(0)
  showMessege(50)