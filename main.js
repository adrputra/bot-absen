const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function CheckIn(name, fungsi, vendor, lokasi, jam){
 
       //To wait for browser to build and launch properly
    //    let driver = await new Builder().forBrowser("chrome").build();
 
    //     //To fetch http://google.com from the browser with our code.
    //     await driver.get("https://docs.google.com/forms/d/e/1FAIpQLSdl0843AfWPmb4tn83yYJKbCWykxjFxHRlCnaTIGfnqachWww/viewform")
    //     inputName = await driver.find_element_by_xpath("//div/div/div/div/input[@type='text']")
    //     inputName.sendKeys(`${name}`)
    //     inputFungsi = await driver.find_element_by_xpath(`//div[@data-value='${fungsi}']`)
    //     fungsi.click()
    //     inputVendor = await driver.find_element_by_xpath(`//span[contains(text(),'${vendor.Capitalize()}')]`)
    //     inputVendor.clik()
    //     inputLokasi = await driver.find_element_by_xpath(`//div[${lokasi}]/label/div/div/div/div[3]/div`)
    //     inputLokasi.click()
    //     inputJam = await driver.find_element_by_xpath(`//div[2]/div[${jam+2}]/span`)
    //     inputJam.click()
    //     buttonSubmit = await driver.find_element_by_xpath("//div[3]/div/div[1]/div/span")

    //     resp = await driver.find_element_by_xpath("//div/div//div/div/div[contains(.,'Your response has been recorded')]").text
    console.log("Berhasil");
    return "\nBerhasil CheckIn. Test Bot"
 
}

async function CheckOut(){
    return
}

module.exports = { CheckIn, CheckOut }