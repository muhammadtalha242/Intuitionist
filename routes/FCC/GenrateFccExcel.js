// Require library
const excel = require('excel4node');

exports.createfccExcel = (obj) => {

    getObject(obj)
}
getObject = (obj) => {
    
    // Create a new instance of a Workbook class
    var workbook = new excel.Workbook();


    const fuelTypeAndPowerPlant = Object.entries(obj)
    fuelTypeAndPowerPlant.forEach(fuel => {
        const date_row_assumption = 3 //0-99
        const date_row_value = 24 //0-99
        var date_col = 2 //A-z
    
        const fuelParamter = fuel[0]

        var worksheet = workbook.addWorksheet(`${fuelParamter}`);

        const dateAndPowerPlants = Object.entries(fuel[1])
        

        dateAndPowerPlants.forEach(dateAndPlant => {
            date_col++
            const date = (dateAndPlant[0]).toString()
            worksheet.cell(date_row_assumption,date_col).string(date)
            worksheet.cell(date_row_value,date_col).string(date)



            const allPowerPlants = dateAndPlant[1]

            
            var name_row_value = date_row_value+1 //0-99
            const name_col = 1 //A-z
                
            var data_row_value = name_row_value //0-99
            var data_col = date_col //A-z
            allPowerPlants.forEach(plant => {
                
                const powerPlantName = plant.plant_name
                

                const indexedValue = plant.index.toString()


                worksheet.cell(name_row_value,name_col).string(powerPlantName)
                

                name_row_value++
                worksheet.cell(data_row_value,data_col).string(indexedValue)
                

                data_row_value++
                
                var name_row_assumption = date_row_assumption+1 //0-99 
                var data_row_assumption = name_row_assumption //0-99
                    
                Object.entries(plant.assumptions).forEach(assumption=>{
                         
                    const assumptionName= assumption[0]
                    const assumptionValue = assumption[1].toString()
                    worksheet.cell(name_row_assumption,name_col).string(assumptionName)
                    
                    name_row_assumption++

                    worksheet.cell(data_row_assumption,data_col).string(assumptionValue)
                    

                    data_row_assumption++
                    

                })

            })

        })

    })

    
    workbook.write('./routes/SDDP/inputSheets/FCC.xlsx');

}


// Add Worksheets to the workbook
// var worksheet2 = workbook.addWorksheet('Sheet 2');

// Create a reusable style
// var style = workbook.createStyle({
//   font: {
//     color: '#FF0800',
//     size: 12
//   },
//   numberFormat: '$#,##0.00; ($#,##0.00); -'
// });

// Set value of cell A1 to 100 as a number type styled with paramaters of style
// worksheet.cell(1,1).number(100).style(style);

// // Set value of cell B1 to 300 as a number type styled with paramaters of style
// worksheet.cell(1,2).number(200).style(style);

// // Set value of cell C1 to a formula styled with paramaters of style
// worksheet.cell(1,3).formula('A1 + B1').style(style);

// // Set value of cell A2 to 'string' styled with paramaters of style
// worksheet.cell(2,1).string('string').style(style);

// // Set value of cell A3 to true as a boolean type styled with paramaters of style but with an adjustment to the font size.
// worksheet.cell(3,1).bool(true).style(style).style({font: {size: 14}});
