import pool from "../config/db.js"

export const getTasks = (request,response)=>{
    pool.query('SELECT * FROM task  ',(error,results)=>
    {if(error){
        throw error
    } response.status(200).json(results.rows)})
}    
export const createTask = (request, response) => {
      const { id ,title, description, priority,task_category,dueDate,completionStatus } = request.body;
    
      if (!id||!title || !description || !priority|| !task_category || !dueDate || !completionStatus) {
        return response.status(400).json({ error: "Missing required fields" });
      }
    
      pool.query(
        'INSERT INTO task (title, description, priority,task_category,dueDate,completionStatus) VALUES ($1, $2, $3 ,$4,$5,$6) RETURNING *',
        [title, description, priority,task_category,dueDate,completionStatus],
        (error, results) => {
          if (error) {
            return response.status(500).json({ error: error.message });
          }
          response.status(201).json({
            message: `task added succefully`,
            student: results.rows[0]
          });
        }
      );
    };

    export const getTaskByCategory =(req,response)=>{
        const category = parseInt(req.params.task_category)
    
        pool.query('SELECT * FROM students WHERE category = $1', [category], (error, results) => {
            if (error) {
              throw error
            }
            response.status(200).json(results.rows)
          })
        }
    

    export const updateTask = (request, response) => {
        const id = parseInt(request.params.id)
        const { title, description, priority,task_category,dueDate,completionStatus} = request.body
      
        pool.query(
          'UPDATE task SET title = $1, description = $2, priority = $3 ,task_category = $4,dueDate=$5,completionStatus=$6 WHERE id = $4',
          [fullname, lastname, origin,id],
          (error, results) => {
            if (error) {
              throw error
            }
            response.status(200).send(`Task modified with ID: ${id}`)
          }
        )
      }

      export const deleteTask = (request, response) => {
        const id = parseInt(request.params.id)
      
        pool.query('DELETE FROM task WHERE id = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`Task deleted with ID: ${id}`)
        })
      }