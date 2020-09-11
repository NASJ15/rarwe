import { click, fillIn } from '@ember/test-helpers';
import { authenticateSession } from 'ember-simple-auth/test-support';

export async function createBand(name) {
	await click('[data-test-rr=new-band-label]');
	await fillIn('[data-test-rr=new-band-input]', name);
	return click('[data-test-rr=new-band-button');
}

export async function createSong(name) {
	await click('[data-test-rr=new-song-label]');
	await fillIn('[data-test-rr=new-song-input]', name);
	await click('[data-test-rr=new-song-button]');
	return click('[data-test-rr=new-song-cancel]');
}

export async function loginAs(email) {
	return authenticateSession({ token: 'a.signed.twt', userEmail: email });
}