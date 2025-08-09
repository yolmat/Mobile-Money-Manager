import { Loading } from "../../../components/loading";
import { api } from "../../../services/api";

export const saveUser = async (data, setLoading, setError, setSuccess) => {
    setLoading(true)

    try {
        await api.post('/user', data)
        setLoading(false)
        setSuccess(true)
    } catch (e) {
        setLoading(false)
        setError(true)
    }
}