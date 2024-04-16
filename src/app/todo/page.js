'use client'
import { GlobalContexts } from "@/contexts/global-contexts";
import { useContext, useEffect } from "react"


export default function Todo() {
    const {task} = useContext(GlobalContexts)
    
    function handleSubmitList(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const form_values = Object.fromEntries(formData);
        task.setData([...task.data, {id: Math.random(), task: form_values.task}])
    }
    useEffect(() => {
        console.log({globalContexts: task.data})
    }, [task.data])

    return <>
        <div className="flex flex-row">
            <div className="basis-1/2">
                <h1>FORM</h1>
                <form onSubmit={handleSubmitList}>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                        <div className="sm:col-span-3">
                            <label htmlFor="task" className="block text-sm font-medium leading-6 text-white-900">Task</label>
                            <div className="mt-2">
                                <input type="text" name="task" id="task" autoComplete="task" className="text-input"/>
                            </div>
                        </div>
                        <div className="mt-7 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-white-900">Cancel</button>
                            <button type="submit" className="btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="basis-1/2">
                <h1>LIST</h1>
                <ul className="list-none">
                        {task.data.length > 0 ?
                            task.data.map(x => {
                                return <li key={x.id} className="m-1">
                                    <div className="flex flex-row">
                                        <p className="flex-1 w-64">{x.task}</p>
                                        <div className="flex-none w-14">
                                            <button className="text-red-900 h-6 w-6 mt-1">X</button>
                                        </div>
                                        <div className="flex-none w-14">
                                            <button className="btn-primary">Edit</button>
                                        </div>
                                    </div>
                                </li>
                            })
                        : <p>Empty</p>}
                </ul>
            </div>
        </div>
    </>
}