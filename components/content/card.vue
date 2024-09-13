<template>
    <div class="px-4 w-full rounded-md border-2 -py-9 border-gray-400">
        <b class="text-red-500 text-lg ">
            <slot name="note-header"></slot>
        </b>
        <slot name="note-text"></slot>
    </div>
</template>

 