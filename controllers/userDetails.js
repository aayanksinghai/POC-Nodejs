const fs = require("fs");
const PDFDocument = require("pdfkit");

//Main Function to call
function createUserDetails(data, filename, image) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });

  generateHeader(doc, image);
  generateDetails(doc, data);
  
  doc.end();
  doc.pipe(fs.createWriteStream(`${process.env.FILE_UPLOAD_PDF}/${filename}`));
}


//Generating Header (HEADING)
function generateHeader(doc, image) {
  doc
    .fillColor("#444444")
    .font("Helvetica-Bold")
    .fontSize(20)
    .text("Second Rishta", 220, 40)
    .rect(230,60,100,100)
    .moveDown();
    
    //Image of person
    doc.image(`${process.env.FILE_UPLOAD_PATH}/${image}`, 230, 60, {fit: [100,100], align: 'center', valign: 'center'})
    //doc.image("Profile Pic.jpg", 230, 60, {width: 80, height: 100} )
}

// Filling Information
function generateDetails(doc, data) {

  //1st Head Line Text
  doc
    .fillColor("#444444")
    .fontSize(18)
    .text("Basic Information", 50, 180);
    generateHr(doc, 205);

    //Difference between Headline and HR is 25
    //Difference between each line is 15
  const fixedTop = 220;

  doc
    .fontSize(10) 
    .font("Helvetica")
    .text("Name:", 50, fixedTop)
    .text(data.Name, 150, fixedTop)
    .text("Date of Birth:", 50, fixedTop + 15)
    .text(data.DOB, 150, fixedTop + 15)
    .text("Marital Status:", 50, fixedTop + 30)
    .text(data.MaritalStatus,150,fixedTop + 30)
    .text("data:", 50, fixedTop + 45)
    .text(data.Gender,150,fixedTop + 45)
    .text("Children:", 50, fixedTop + 60)
    .text(data.Children,150,fixedTop + 60)
    .text("Height:", 50, fixedTop + 75)
    .text(data.Height,150,fixedTop + 75)
    .text("Complexion:", 50, fixedTop + 90)
    .text(data.Complexion,150,fixedTop + 90)
    .text("Body Type:", 50, fixedTop + 105)
    .text(data.BodyType,150,fixedTop + 105)
    .text("Mother Tongue:", 50, fixedTop + 120)
    .text(data.MotherTongue,150,fixedTop + 120)  // 200 + 120 = 335 +20
    .moveDown();
  
    // 2nd Headline Text
    doc
      .fillColor("#444444")
      .fontSize(18)
      .font("Helvetica-Bold")
      .text("Education & Career", 335, 180)
    
    doc  
      .fontSize(10)
      .font("Helvetica")
      .text("Education",335,fixedTop)
      .text(data.Education,435,fixedTop)
      .text("Education Details:", 335, fixedTop + 15)
      .text(data.EducationDetails,435,fixedTop + 15)
      .text("Occupation:", 335, fixedTop + 30)
      .text(data.Occupation,435,fixedTop + 30)
      .text("Occupation Details:", 335, fixedTop + 45)
      .text(data.OccupationDetails,435,fixedTop + 45)
      .text("Annual Income:", 335, fixedTop + 60)
      .text(data.AnnualIncome,435,fixedTop + 60) // 200 + 60 = 260 +20
      
    // 3rd Headline TEXT
      doc
      .fillColor("#444444")
      .font("Helvetica-Bold")
      .fontSize(18)
      .text("Socio - Religious Background", 50, fixedTop + 145)
      generateHr(doc, fixedTop + 170);  

      doc  
      .fontSize(10)
      .font("Helvetica")
      .text("Religion:",50,fixedTop + 185)
      .text(data.Religion,150,fixedTop + 185)
      .text("Community:", 50, fixedTop + 200)
      .text(data.Community,150,fixedTop + 200)
      .text("Caste:", 50, fixedTop + 215)
      .text(data.Caste,150,fixedTop + 215)
      .text("Sub Caste:", 50, fixedTop + 230)
      .text(data.SubCaste,150,fixedTop + 230)
      .text("Family Values:", 50, fixedTop + 245)
      .text(data.FamilyValues,150,fixedTop + 245)
      .text("Eating Habits:", 50, fixedTop + 260)
      .text(data.EatingHabits,150,fixedTop + 260)
      .text("Drinking Habits:", 50, fixedTop + 275)
      .text(data.DrinkingHabits,150,fixedTop + 275)
      .text("Smoking Habits:", 50, fixedTop + 290)
      .text(data.SmokingHabits,150,fixedTop + 290) // 200 + 290 = 490 +20 

      //4th HEADLINE Text
      doc
      .fillColor("#444444")
      .font("Helvetica-Bold")
      .fontSize(18)
      .text("Astro Info", 335, fixedTop + 145)  

      doc  
      .fontSize(10)
      .font("Helvetica")
      .text("Sun Sign:",335,fixedTop + 185)
      .text(data.SunSign,435,fixedTop + 185)
      .text("Time of Birth:", 335, fixedTop + 200)
      .text(data.Time,435,fixedTop + 200)
      .text("Country of Birth:", 335, fixedTop + 215)
      .text(data.Country,435,fixedTop + 215)
      .text("City of Birth:", 335, fixedTop + 230)
      .text(data.City,435,fixedTop + 230)
      .text("Manglik:", 335, fixedTop + 245)
      .text(data.Manglik,435,fixedTop + 245) // 200 + 245 = 445+20

      //5th HEADLINE Text
      doc
      .fillColor("#444444")
      .font("Helvetica-Bold")
      .fontSize(18)
      .text("Location", 50, fixedTop + 315)
      generateHr(doc, fixedTop + 340);  

      
      doc  
      .fontSize(10)
      .font("Helvetica")
      .text("Citizenship:",50, fixedTop + 355)
      .text(data.Citizenship,150, fixedTop + 355)
      .text("Resident Status:", 50,  fixedTop + 370)
      .text(data.ResidentialStatus,150, fixedTop + 370)
      .text("Current Residence:", 50, fixedTop + 385)
      .text(data.CurrentResidence,150, fixedTop + 385)
      generateHr(doc, fixedTop + 410); //200 + 410 = 610+20

}

function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

module.exports = {
  createUserDetails
};
