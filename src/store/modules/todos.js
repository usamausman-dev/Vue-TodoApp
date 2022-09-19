import axios from "axios";

const state = {
    todos: []
};
const getters = {
    allTodos: (state) => state.todos

};
const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('FETCH_TODOS', response.data)
    },


    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })
        commit('ADD_TODO', response.data)
    },


    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('DELETE_TODO', id)
    },


    async filterTodo({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('FETCH_TODOS', response.data);
    },

    async updateTodo({ commit }, updTodo) {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`);
        commit('UPDATE_TODOS', updTodo);
    }
};
const mutations = {
    FETCH_TODOS: (state, todos) => (state.todos = todos),
    ADD_TODO: (state, todo) => state.todos.unshift(todo),
    DELETE_TODO: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    UPDATE_TODOS: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    }
};

export default {
    state, getters, actions, mutations
}