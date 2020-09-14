const user =["Moein", "Ghasemi", "09107597661"]
const userData = JSON.stringify(user)
const arr = JSON.parse(userData)
for (const x in arr) {
   console.log(arr[x])
}