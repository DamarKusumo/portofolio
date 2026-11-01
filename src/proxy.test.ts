import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NextRequest } from 'next/server.js';
import { proxy } from './proxy.ts';

test('redirects when the host header is the old domain', () => {
  const response = proxy(
    new NextRequest('http://localhost/', {
      headers: { host: 'damarkusumo.vercel.app' },
    })
  );

  assert.ok(response);
  assert.equal(response.status, 301);
  assert.equal(
    response.headers.get('location'),
    'https://portofolio.mudaku.my.id/'
  );
});

test('redirects when x-forwarded-host is the old domain, preserving path and query', () => {
  const response = proxy(
    new NextRequest('http://localhost/projects?tab=2', {
      headers: {
        host: 'portofolio.mudaku.my.id',
        'x-forwarded-host': 'damarkusumo.vercel.app',
      },
    })
  );

  assert.ok(response);
  assert.equal(response.status, 301);
  assert.equal(
    response.headers.get('location'),
    'https://portofolio.mudaku.my.id/projects?tab=2'
  );
});

test('does not redirect requests to the main domain', () => {
  const response = proxy(
    new NextRequest('https://portofolio.mudaku.my.id/', {
      headers: { host: 'portofolio.mudaku.my.id' },
    })
  );

  assert.equal(response, undefined);
});
