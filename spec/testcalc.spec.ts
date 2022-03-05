import { Ensure, includes } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { by, Click, Navigate, Target, Website } from '@serenity-js/webdriverio';
import { describe, it } from 'mocha';

const assert = require('assert')

describe('Super Calculator test website', () => {

    it('should open website', () => {
        browser.url('http://juliemr.github.io/protractor-demo/')
    })

    it('should pause the execution', async () => {
    const starttime = new Date().getTime()
    await browser.pause(5000)
    const endtime = new Date().getTime()
    console.log(endtime - starttime) // outputs: 5000
    })

    it('should return browser window size', async () => {
    const windowSize = await browser.getWindowSize();
    console.log(windowSize);
    // outputs `{ width: 1280, height: 767 }`
    })
})