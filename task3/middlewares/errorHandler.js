const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    console.error(error.message); 
    res.status(500).json({
      
      message: 'Une erreur interne est survenue.',
      error: err.message,
    });
  };
  
export default errorHandler;
  