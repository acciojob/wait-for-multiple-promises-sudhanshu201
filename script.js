let randomDelay1 = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
let randomDelay2 = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
let randomDelay3 = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;

console.log(randomDelay1,randomDelay2,randomDelay3)
let myPromise2 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve(randomDelay1/1000)
	},randomDelay1)
})

let myPromise1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve(randomDelay2/1000)
	},randomDelay2)
})

let myPromise3 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
        resolve(randomDelay3/1000)
	},randomDelay3)
})

//record the start time
let startTime = Date.now()

//show the loading row
document.getElementById("output").innerHTML =
`
<tr id='loading'>
    <td colspan="2">Loading...</td>
</tr>
`

Promise.all([myPromise1,myPromise2,myPromise3])
.then((times)=>{
    //calculate the total time taken
    let totalTime = (Date.now() - startTime) / 1000;
    // Remove the loading row
  document.getElementById("loading").remove();

	// Populate the table with the resolved promises and times
    let outputHTML = `
    <tr>
      <td>Promise 1</td>
      <td>${times[0]}</td>
    </tr>
    <tr>
      <td>Promise 2</td>
      <td>${times[1]}</td>
    </tr>
    <tr>
      <td>Promise 3</td>
      <td>${times[2]}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>${totalTime.toFixed(3)}</td>
    </tr>
  `;
    // Insert the new rows into the table
  document.getElementById("output").innerHTML = outputHTML;
})
