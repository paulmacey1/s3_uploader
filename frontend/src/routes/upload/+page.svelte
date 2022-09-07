<script type="ts">
	let files: null;

	import { Storage } from 'aws-amplify';
	import type { append } from 'svelte/internal';
	import Layout from '../+layout.svelte';
	import { goto } from '$app/navigation';
	import config from '../../config'

	let isLoading=false;

	$: if (files) {
		// Note that `files` is of type `FileList`, not an Array:
		// https://developer.mozilla.org/en-US/docs/Web/API/FileList
		console.log(files);

		for (const file of files) {
			console.log(`${file.name}: ${file.size} bytes`);
		}
	}

	async function s3Upload(file) {
		console.log("uploading")
		const filename = `${Date.now()}-${file.name}`;

		const stored = await Storage.vault.put(filename, file, {
			contentType: file.type
		});

		return stored.key;
	}

	async function handleSubmit(event) {
		let file=''
		file=files[0]
		event.preventDefault();

		if (file && file.size > config.MAX_ATTACHMENT_SIZE) {
			alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE / 1000000} MB.`);
			return;
		}

		isLoading=true;
		
		try {
			console.log(file);
			const attachment = file ? await s3Upload(file) : null;
            console.log(attachment)
			
		} catch (e) {
			onError(e);

		isLoading=false;

		}
		goto('/')
	}
</script>
<div className="UploadData">
    <form on:submit|preventDefault={handleSubmit}>
    <h1>Upload data file</h1>

    <input bind:files id="files" name="myfile" type="file" />
    <button type="submit">Upload</button>
    </form>
    </div>
