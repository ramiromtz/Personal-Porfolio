import React, { useState } from 'react'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    }

  return (
    <div className='max-w-2xl w-full'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-12 text-center'>Contacto</h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Input para el nombre */}
            <div className="relative">
                <input type="text" name='name' value={formData.name} onChange={handleChange} required 
                    className='peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent outline-none focus:border-yellow-500 transition-all duration-300 text-lg text-gray-800 dark:text-gray-200 pt-3'
                    placeholder=' ' // Input style google
                />
                <label className='absolute left-0 top-0 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-yellow-500'>Nombre</label>
            </div>
            {/* Input para el email */}
            <div className="relative">
                <input type="email" name='email' value={formData.email} onChange={handleChange} required 
                    className='peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent outline-none focus:border-yellow-500 transition-all duration-300 text-lg text-gray-800 dark:text-gray-200 pt-3'
                    placeholder=' ' // Input style google
                />
                <label className='absolute left-0 top-0 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-yellow-500'>Correo Electronico</label>
            </div>
            {/* Input para el email */}
            <div className="relative">
                <textarea name='message' value={formData.message} onChange={handleChange} required rows="4"
                    className='peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent outline-none focus:border-yellow-500 transition-all duration-300 text-lg text-gray-800 dark:text-gray-200 pt-3'
                    placeholder=' ' // Input style google
                />
                <label className='absolute left-0 top-0 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-yellow-500'>Mensaje</label>
            </div>

            {/* Boton para enviar */}
            <div className="text-center">
                <button type='submit' className='bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition-all duration-300'>Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Contact
