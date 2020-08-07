/* eslint-disable no-undef */
import { getArticles } from './guardian-api';

describe('getArticles service', () => {
  it('uses fetch to get Articles', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        response: {
          results: []
        }
      })
    }));

    return getArticles()
      .then(res => {
        expect(res).toEqual([]);
      });
  });
});
