const pageLoaded = () => {

    console.log('|', 'page loaded', '|');

    const canvas = document.getElementById('testcanvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(25, 25, 100, 100);

    ctx.fillStyle = 'orange';
    ctx.strokeStyle = 'orange';
    ctx.beginPath();
    ctx.moveTo(150, 25);
    ctx.lineTo(150, 125);
    ctx.lineTo(250, 75);
    ctx.fill();

    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.arc(325, 75, 50, 0, 2*Math.PI, true);
    ctx.fill();

    //

    ctx.fillStyle = 'aquamarine';
    ctx.fillRect(10, 150, 240, 40);

    ctx.fillStyle = 'brown';
    ctx.beginPath();
    ctx.moveTo(300, 150);
    ctx.lineTo(380, 170);
    ctx.lineTo(360, 230);
    ctx.lineTo(255, 180);
    ctx.fill();

    ctx.fillStyle = 'purple';
    ctx.beginPath();
    ctx.arc(450, 180, 45, 0, 2*Math.PI, true);
    ctx.fill();
    
};