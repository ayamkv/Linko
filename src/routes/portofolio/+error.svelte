<script lang='ts'>
    import {page} from '$app/stores';
</script>

<h1>Uh Oh! an Error Happened D: at portofolio</h1>
<p>error status: {$page.status}</p>
<p>error desc: {$page.error.message}</p>