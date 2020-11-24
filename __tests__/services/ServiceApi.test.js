/* eslint-disable jest/no-disabled-tests */
import moxios from 'moxios';
import ServiceApi from 'services/ServiceApi';
import * as mockData from '../mockData.json';
import APIS from '../../src/APIs';

describe.skip('service : Api', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should get data', (done) => {
    ServiceApi.getData();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,

          response: {
            data: mockData,
          },
        })
        .then((data) => {
          const req = data.request.config;
          expect(data.status).toStrictEqual(200);
          expect(req.method).toStrictEqual('get');
          expect(data.data.data).toStrictEqual(mockData.dataList);
          expect(req.url).toStrictEqual(APIS.mocky_io, {});
          done();
        });
    });
  });

  it('should return the error', (done) => {
    ServiceApi.getData();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 400,

          response: {
            data: 'Error',
          },
        })
        .then((data) => {
          const req = data.request.config;
          expect(data.status).toStrictEqual(400);
          expect(req.method).toStrictEqual('get');
          expect(req.url).toStrictEqual(APIS.mocky_io, {});
          done();
        });
    });
  });
});
