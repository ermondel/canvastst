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

    // ctx.fillStyle = "lightblue";
    // ctx.strokeStyle = "lightblue";
    // 2. Draw a filled triangle
    // ctx.beginPath();
    // ctx.moveTo(10, 20);
    // ctx.lineTo(10, 80);
    // ctx.lineTo(110, 50);
    // ctx.fill();
    // 3. Draw a stroked triangle
    // ctx.beginPath();
    // ctx.moveTo(140, 60);
    // ctx.lineTo(140, 120);
    // ctx.lineTo(40, 90);
    // ctx.closePath();
    // ctx.stroke();
    // 4. Draw a semicircle
    // ctx.beginPath();
    // ctx.arc(50, 160, 40, 0, Math.PI, true);
    // ctx.stroke();
    // 5. Draw a full cicrcle
    // ctx.beginPath();
    // ctx.arc(50, 160, 30, 0, 2 * Math.PI, true);
    // ctx.fill();
    // 6. Draw a three-quarter arc
    // ctx.beginPath();
    // ctx.arc(140, 160, 25, 0, 3/2 * Math.PI, false);
    // ctx.stroke();
    // 7. Draw a more complex set of lines
    // ctx.beginPath();
    // ctx.moveTo(160, 60);
    // ctx.lineTo(170, 120);
    // ctx.lineTo(240, 110);
    // ctx.lineTo(260, 70);
    // ctx.lineTo(190, 40);
    // ctx.closePath();
    // ctx.stroke();
    // end

    // 8. Drawing text
    // ctx.fillText('This is some text', 330, 40);
    // Modify the font
    // ctx.font = '10pt Arial';
    // ctx.fillText('This is in 10pt Arial', 330, 60);
    // Draw stroked text
    // ctx.font = '16pt Arial';
    // ctx.strokeText('This is stroked in 16pt Arial', 330, 80);

    // 9. Fill styles and colors
    // ctx.fillStyle = 'red';
    // ctx.fillRect(310, 160, 100, 50);
    // ctx.strokeStyle = 'green';
    // ctx.strokeRect(310, 240, 100, 50);
    // ctx.fillStyle = "rgb(255, 255, 0)";
    // ctx.fillRect(420, 160, 100, 50);
    // ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
    // ctx.fillRect(450, 180, 100, 50);
    // const grassImage = document.getElementById('grass');
    // const pattern = ctx.createPattern(grassImage, "repeat");
    // ctx.fillStyle = pattern;
    // ctx.fillRect(420, 240, 130, 50);
    
    // Drawing images
    // const spaceship = document.getElementById('spaceship');
    // ctx.drawImage(spaceship, 0, 150);
    // ctx.drawImage(spaceship, 0, 100, 100, 25);
    // ctx.drawImage(spaceship, 0, 0, 60, 50, 0, 0, 60, 50);

    // Rotation and translation
    const spaceship = document.getElementById('spaceship');
    ctx.translate(250, 370);
    ctx.rotate(Math.PI / 3);
    ctx.drawImage(spaceship, 0, 0, 60, 50, -30, -25, 60, 50);
    ctx.rotate(-Math.PI / 3);
    ctx.translate(-240, -370);
    ctx.translate(300, 370);
    ctx.rotate(3 * Math.PI / 4);
    ctx.drawImage(spaceship, 0, 0, 60, 50, -30, -25, 60, 50);   
    ctx.rotate(-3 * Math.PI / 4);
    ctx.translate(-300, -370);
}