# WIO_Appium
This is mobile automation framework
**WebdriverIO Mobile Testing Framework**
Overview

This repository contains a WebdriverIO framework for running automated tests on Android devices. The framework is configured to work with Appium and is set up to perform basic operations on an Android application.
Prerequisites

Before you can use this framework, ensure you have the following installed on your machine:

    Node.js 
    Appium 
    Java Development Kit (JDK)
    Android SDK and ADB configured

Installation

Clone this repository to your local machine:
git clone <repository_url>

Install the necessary dependencies:
npm install

Configuration

Ensure your Android device is connected and recognized by ADB:
adb devices

Running Tests

Start the Appium server:
appium

In a new terminal window, navigate to your project directory and run the tests:
npx wdio run ./wdio.conf.js
