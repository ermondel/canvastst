const pageLoaded = () => {
    console.log('---', 'page loaded');
    const canvas = document.getElementById('testcanvas');
    const ctx = canvas.getContext('2d');

    //
    // ctx.fillStyle = "lightgreen";
    // Filled rectangles
    // ctx.fillRect(200, 10, 100, 100);
    // ctx.fillRect(50, 70, 90, 30);
    // Stroked rectangles
    // ctx.strokeRect(110, 10, 50, 50);
    // ctx.strokeRect(30, 10, 50, 50);
    // Clearing rectangles
    // ctx.clearRect(210, 20, 30, 20);
    // ctx.clearRect(260, 20, 30, 20);

    // 1
    // ctx.fillStyle = "orange";
    // ctx.fillRect(330, 10, 49, 49);
    // ctx.fillRect(381, 10, 49, 49);
    // ctx.fillRect(330, 61, 49, 49);
    // ctx.fillRect(381, 61, 49, 49);

    ctx.fillStyle = "lightblue";
    ctx.strokeStyle = "lightblue";
    // 2. Draw a filled triangle
    ctx.beginPath();
    ctx.moveTo(10, 20);
    ctx.lineTo(10, 80);
    ctx.lineTo(110, 50);
    ctx.fill();
    // 3. Draw a stroked triangle
    ctx.beginPath();
    ctx.moveTo(140, 60);
    ctx.lineTo(140, 120);
    ctx.lineTo(40, 90);
    ctx.closePath();
    ctx.stroke();
    // 4. Draw a semicircle
    ctx.beginPath();
    ctx.arc(50, 160, 40, 0, Math.PI, true);
    ctx.stroke();
    // 5. Draw a full cicrcle
    ctx.beginPath();
    ctx.arc(50, 160, 30, 0, 2 * Math.PI, true);
    ctx.fill();
    // 6. Draw a three-quarter arc
    ctx.beginPath();
    ctx.arc(140, 160, 25, 0, 3/2 * Math.PI, false);
    ctx.stroke();
    // 7. Draw a more complex set of lines
    ctx.beginPath();
    ctx.moveTo(160, 60);
    ctx.lineTo(170, 120);
    ctx.lineTo(240, 110);
    ctx.lineTo(260, 70);
    ctx.lineTo(190, 40);
    ctx.closePath();
    ctx.stroke();
    // end
    
}