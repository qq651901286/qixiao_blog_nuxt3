// 基于useFetch()的网络请求封装
// 全局基础URL
// 全局后台服务器请求地址
const BASEURL: string = "https://www.baidu.com";

//定义ts变量类型接口
interface HttpParms {
    //请求的基本URL，即后台服务器地址，（若服务器请求地址只有一个，可不填）
    baseURL?: string,
    //请求api接口地址
    url: string,
    //请求方法
    method?: any,
    //添加查询搜索参数到URL
    query?: any,
    //请求体
    body?: any
}

/**
 * 网络请求方法
 * @param obj 请求参数
 * @returns 响应结果
 */
export const http = (obj: HttpParms) => {
    const res = new Promise<void>((resolve, reject) => {
        useFetch(
            (obj.baseURL ?? BASEURL) + obj.url,
            {
                method: obj.method ?? "GET",
                query: obj?.query ?? null,
                body: obj?.body ?? null,
                onRequest({request, options}) {
                    // 设置请求报头
                    options.headers = options.headers || {}
                    /**如果接口需求携带token请求，则可先自行使用官方的useCookie()方法
                     * 设置Cookie存储后，再使用useCookie()方法，取出token使用。如下例子：*/
                    //const token = useCookie('token')
                    //@ts-ignore
                    //options.headers.Authorization = token.value||null
                },
                onRequestError({request, options, error}) {
                    // 处理请求错误
                    console.log("服务器链接失败!")
                    reject(error)
                },
                onResponse({request, response, options}) {
                    // 处理响应数据
                    resolve(response._data)
                },
                onResponseError({request, response, options}) {
                    // 处理响应错误
                }
            },
        )
    })
    return res;

}
