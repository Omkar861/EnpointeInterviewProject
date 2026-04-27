import {test as base} from '@playwright/test'

export const test = base.extend({
    dashboardPg: async({page},use)=>{
        await page.goto("/");
    

        await use(page);

        await page.close();
    }



})