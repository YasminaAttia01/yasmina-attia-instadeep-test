const validateStudent = (req, res, next) => {
    const { title, description, priority,task_category,dueDate,completionStatus } = req.body;
    if (!title || !description || !priority|| !task_category || !dueDate || !completionStatus) {
      return res.status(400).json({
        message: 'Les champs title,description,priority,task_category,dueDate ,completionStatus  sont obligatoires.',
      });
    }
    next(); 
  };
  
export default validateStudent;
  