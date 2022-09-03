<script type="ts">
	let file: null = null;

	import { Storage } from 'aws-amplify';
import type { append } from 'svelte/internal';
import Layout from '../+layout.svelte';
import { goto } from '$app/navigation';
import config from '../../config'

const isLoading=false;

	export async function s3Upload(file) {
		const filename = `${Date.now()}-${file.name}`;

		const stored = await Storage.vault.put(filename, file, {
			contentType: file.type
		});

		return stored.key;
	}

	async function handleSubmit(event) {
        console.log('submitted')
		event.preventDefault();

		if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
			alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE / 1000000} MB.`);
			return;
		}

		// setIsLoading(true);

		try {
			const attachment = file.current ? await s3Upload(file.current) : null;
            console.log(attachment)
			goto('/')
		} catch (e) {
			onError(e);

			// setIsLoading(false);
		}
	}
</script>
<div className="UploadData">
    <form on:submit|preventDefault={handleSubmit}>
    <h1>Upload data file</h1>

    <input  bind:value={file} id="file" name="file" type="file" />
    <button type="submit">Upload</button>
    </form>
    </div>
