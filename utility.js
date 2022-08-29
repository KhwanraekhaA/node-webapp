//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzU4ODMxLCJleHAiOjE2NjE3NjI0MzEsIm5iZiI6MTY2MTc1ODgzMSwianRpIjoiQ2JCU3k1QVJVU2REQkhJWiIsInN1YiI6ODEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.p0XfLxJRsC5mtVTCDieQEQyS_nlqM-n7du0k7zMivX4" ; // put access token
const student = {
    student_id: 63360682,
    name: '', 
    age: 19, 
    gender: '', 
    department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
    //-- call external api 
            request({
              method: "GET",
              uri: EXTERNAL_API+student_id,
              headers: {
                  Authorization: `Bearer ${accessToken}`
              }
          }).then((response) => {
              console.log('Sent');
              console.log({
                  "request": student_id,
                  "response": response
              });
  
             cb(response);
  
          }).catch((err) => {
              console.log('Error:', err.message);
              console.log({
                  "Error": err.message
              });
          });
  }

exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}