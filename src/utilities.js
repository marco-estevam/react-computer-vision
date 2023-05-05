export const drawRect = (detections, ctx) => {
  // Loop through each prediction
  detections.forEach(prediction => {
    //sendAlert(prediction['bbox'])
    // Extract boxes and classes
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'] + " - " + (prediction['score'] * 100).toFixed(2) + "%";

    // Set styling
    const color = Math.floor(Math.random() * 16777215).toString(16);
    ctx.strokeStyle = '#' + color
    ctx.font = '18px Arial';

    // Draw rectangles and text
    ctx.beginPath();
    ctx.fillStyle = '#' + color
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width * 0.8, height * 0.8);
    ctx.stroke();
  });
}

const sendAlert = async className => {
  console.log(className)
};