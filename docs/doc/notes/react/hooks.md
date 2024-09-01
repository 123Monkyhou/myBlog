### hooks使用
1. useStete
    description:react Hook，用来向组件添加状态变量，从而控制组建的渲染结果。我理解就是手动档的v-model
    use: const [count,setCount] = useState(0)
    ps: 数组的结构
    ```
    const [a, b, c] = [1, 2, 3];
    log a    // 1
    const { name, age } = { name: 'Alice', age: 25 };
    log name // Alice
    ```
    rule:状态被认为是只读的，直接修改状态不能引发视图更新。应该替换而不是修改。
    ```
    error:视图不会更新
     const handleClick = () => {
        count++
    }
    correct:
    const handleClick = () => {
        setCount(count + 1)
    }
    ```
2. useRef
    description:获取dom元素
    use: 
        ```
        <input ref={inputRef}/>
        const inputRef = useRef(null)
        console.log(inputRef.current) //获取到dom元素
        ```
    ps:和vue3类似
3. useEffect
    description:用于创建不是由事件引起，而是渲染本身引起的操作

    use:
        useEffect(()={},[]) // 参数1：副作用函数

    | 依赖项 | 副作用函数的执行时机 |
    | --- | --- |
    | 无 | 组件初始渲染+组件更新 |
    | 空数组 | 初始渲染 |
    | 特定依赖项 | 初始+特性依赖项变化时 |

    ps：类似vue的生命周期
    清除副作用：
        use:
            ```
            useEffect(()=>{
                // 实现副作用的逻辑
                return ()=>{
                    // 清除副作用的逻辑
                }
            },[])
            // 1.卸载后清除定时器
            useEffect(()=>{
                const timer = setInterval(()=>{console.log('11')})
                return ()=>{
                    clearInterval(timer)
                }
            },[])
            ```
        ps:如果副作用函数是一个定时器，则需要执行后卸载掉。这个过程就叫清除副作用

4. useReducer 
4. 自定义hooks
    description:
        以use打头的函数，通过自定义hook函数实现逻辑的封装和复用
        使用规则：只能在组件函数内，并且顶层使用，不能嵌套在if,for,其他函数中
    use:
    ```
    function useToggle() {
    const [val, setval] = useState(true)
    function toggle() {
        setval(!val)
    }
        return {
            val,
            toggle
        }
    }
    function App() {
    const {val,toggle} = useToggle()
    return (
            <div>
            <button onClick={toggle}>toggle</button>
            {val &&  <div>show</div>}
            </div>
        )
    }
    ```
    ps:类似于compisitonsApi
5. redux
    description:集中管理状态工具
    ps: vuex
    use:

    redux:
    1. 定义一个reducer函数
    2. 使用createStore方法出入reducer函数，生成一个store实例对象
    3. 使用store实例的subscribe方法订阅数据的变化
    4. 使用store的dispitch方法提交action对象 触发数据变化
    5. 使用store实例的getstate方法 获取最新的状态更新至视图
    对比
    vuex:
    1. 创建store对象
    2. store中包含
    ```
        // 1
        function(state={count:0},action){
            if(action.type === 'INCEMENT'){
                return {count:state.count+1}
            }
            if(action.type === 'DECEMENT'){
                return {count: state.count -1}
            }
            return state
        }
        // 2
        const store = Redux.createStore(reducer)
        // 3
        store.subscribe(()=>{
            console.log('state变化了')
            //5 
            console.log('count='+store.getState())
        })
        // 4
        const Btn = document.queryselector(button)
        store.dispitch({
            type:"INCEMENT"
        })
    ```
        生态：react-reducer + toolkit
        1. redux传参
        2. 操作异步
        