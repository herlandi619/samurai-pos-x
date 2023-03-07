import React, { Component  } from 'react';
import Post from './Post';
import axios from 'axios';




class BlogPost extends Component {


    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            password: '',
            email: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then((res) =>{
            this.setState({
                post: res.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) =>{
            console.log(res);
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    password: '',
                    email: '',
                    userId: 1
                },
            })
        }, (err) => {
            console.log('error: ', err);
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(res => {
          console.log(res);
          this.getPostAPI();
          this.setState({
            isUpdate: false,
            formBlogPost: {
                id: 1,
                title: '',
                password: '',
                email: '',
                userId: 1
            },
          })
      })
  }


    handleRemove = (data) => {
            
            axios.delete(`http://localhost:3004/posts/${data}`)
            .then((res) =>{
               this.getPostAPI()
            })
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })   
    }


    handleFormChange = (event) => {
       
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();

        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }

        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        })
    }  

    handleSubmit = () => {
        if(this.state.isUpdate){
         this.putDataToAPI()
        } else {
         this.postDataToAPI();
        }
     }


    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.setState({
    //         post: json
    //     })
    //   })
        // axios.get(' http://localhost:3004/posts').then((result) =>{
        //         this.setState({
        //             post: result.data
        //         })
        //     })

        this.getPostAPI();

       

    }

    render() {
        return (
            <div className='bg-[#8FE4FF]'>
               <div>
                    <div className='w-[80%] mx-auto'>
                    <p className='font-semibold text-3xl text-slate-100 text-center p-12 mx-auto'>-Register-</p>
                    <hr className='mx-auto'/>
                    </div>
                </div>
  

                <div data-aos='fade-left' className='grid w-2/3 md:w-1/3 xl:w-1/3 mx-auto  p-5 rounded-lg shadow-lg bg-white my-5 font-semibold'>
                    <label htmlFor="title" className=''>Username :</label>
                    <input type="text" name='title' value={this.state.formBlogPost.title} placeholder='Masukan Nama' className='border-2 my-3 ' onChange={this.handleFormChange} />

                    <label htmlFor="title" className=''>Email :</label>
                    <input type="text" name='email' value={this.state.formBlogPost.email} placeholder='Masukan Email' className='border-2 my-3 ' onChange={this.handleFormChange} />

                    <label htmlFor="title" className=''>Password :</label>
                    <input type="password" name='password' value={this.state.formBlogPost.password} placeholder='Masukan Password' className='border-2 my-3 ' onChange={this.handleFormChange} />
                    
                    <button className='btn-submit  bg-red-500 rounded-lg text-white hover:scale-105 mx-auto w-[120px] h-[40px] duration-100' onClick={this.handleSubmit} >Submit</button>
                </div>

                <div>
                    <div className='w-[80%] mx-auto'>
                    <p className='font-semibold text-3xl text-slate-100 text-center p-12 mx-auto'>-List Register-</p>
                    <hr className='mx-auto'/>
                    </div>
                </div>

              {
                this.state.post.map(post => {
                    return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                })
              }
              
            </div>
            
        );
    }
}

export default BlogPost;