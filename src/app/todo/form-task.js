export default function FormTask() {
    return <>
        <form onSubmit={handleSubmitList}>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                <div class="sm:col-span-3">
                    <label for="task" class="block text-sm font-medium leading-6 text-white-900">Task</label>
                    <div class="mt-2">
                        <input type="text" name="task" id="task" autocomplete="task" class="text-input"/>
                    </div>
                </div>
                <div class="mt-7 flex items-center justify-end gap-x-6">
                    <button type="button" class="text-sm font-semibold leading-6 text-white-900">Cancel</button>
                    <button type="submit" class="btn-primary">Save</button>
                </div>
            </div>
        </form>
    </>
}