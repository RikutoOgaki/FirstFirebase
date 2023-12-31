import Head from 'next/head'
import { useState, useEffect } from 'react'
import { collection, addDoc, getDocs, QuerySnapshot, query, onSnapshot } from 'firebase/firestore'
import { Box, Flex, Text, Input, Button } from '@chakra-ui/react'
import { db } from '@/libs/firebase/firebase'

export default function Home() {

  // タスクの内容データ
  const [task, setTask] = useState<string>('')

  // タスクの全件を取ってくるデータ
  const [taskArray, setTaskArray] = useState([{}])


  // データベースにタスクを追加する関数
  const addTask = async () => {
    if (task !== '') {

      await addDoc(collection(db, 'tasks'), {
        task: task.trim()
      })
      setTask('')
    }
  }

  // データべーエのタスクの数を数えて、配列に格納する
  useEffect(() => {
    const getData = query(collection(db, 'tasks'))
    const data = onSnapshot(getData, (QuerySnapshot) => {
      let taskArray: Array<object> = []

      QuerySnapshot.forEach((e) => {
        console.log(e);

        taskArray.push({ ...e.data(), id: e.id })
      })
      setTaskArray(taskArray)
    })

    return () => data()

  }, [])

  console.log(taskArray);



  // 終わったタスクを消す関数

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent={'center'} alignItems={'cneter'} flexDirection={'column'}>
        <Flex>
          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button
            onClick={() => addTask()}
          >追加</Button>
        </Flex>
        <Box>
          {taskArray.map((v, idx) =>
            <Box key={idx}>
              <Text>{v.task}</Text>
            </Box>
          )}
        </Box>
      </Flex>
    </>
  )
}
