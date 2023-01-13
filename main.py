from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
import pyautogui as p

# Config
PATH = "chromedriver.exe"
options = webdriver.ChromeOptions()
options.headless = False
driver = webdriver.Chrome(executable_path=PATH, options=options)

def CheckIn(name, fungsi, vendor, lokasi, jam):
    # driver.get("https://docs.google.com/forms/d/e/1FAIpQLSdl0843AfWPmb4tn83yYJKbCWykxjFxHRlCnaTIGfnqachWww/viewform")
    # inputName = driver.find_element_by_xpath("//div/div/div/div/input[@type='text']")
    # inputName.sendKeys(f"{name}")
    # inputFungsi = driver.find_element_by_xpath(f"//div[@data-value='{fungsi}']")
    # fungsi.click()
    # inputVendor = driver.find_element_by_xpath(f"//span[contains(text(),'{vendor.Capitalize()}')]")
    # inputVendor.clik()
    # inputLokasi = driver.find_element_by_xpath(f"//div[{lokasi}]/label/div/div/div/div[3]/div")
    # inputLokasi.click()
    # inputJam = driver.find_element_by_xpath(f"//div[2]/div[{jam+2}]/span")
    # inputJam.click()
    # buttonSubmit = driver.find_element_by_xpath("//div[3]/div/div[1]/div/span")
    
    # resp = driver.find_element_by_xpath("//div/div//div/div/div[contains(.,'Your response has been recorded')]").text
    return "Berhasil CheckIn. Test Bot"

def CheckOut():
    return "Berhasil CheckOut. Test Bot"
