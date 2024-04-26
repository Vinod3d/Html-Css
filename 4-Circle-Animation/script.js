const circles = document.getElementById('circlesContainer');

for(let i = 0; i< 10; i++){
    // Create 10 circle element
    const circle = document.createElement("div");
    circle.className = 'circle';

    // Create 30 claws for each circle
    for(let j = 0; j < 30; j++){
        const claw = document.createElement('div');
        claw.className = "claw";
    
        circle.appendChild(claw);
    }

    circles.appendChild(circle)

}