import { APIRequestContext, expect } from '@playwright/test';

const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiI4NTIifQ.NceRpayI3jQL-D94874bpUFJXPGM3ZYYxWQx8NxaluJHjG--0ID63IjzN60B1p0V',
};

export default class RtmRestApiActions {
    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    deleteIssue = {
        deleteTC: async (testCaseTestKey: string): Promise<void> => {
            const res = await this.request.delete(`https://staging-rtm-cloud-eu.herokuapp.com/api/v2/test-case/${testCaseTestKey}`, {
                headers,
            });
            await expect(res, '✖ Response was not 204').toBeOK();
        },
    };
}
