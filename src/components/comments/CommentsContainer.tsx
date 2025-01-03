import { ProjectType } from '@/types/project'
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import PostComment from './PostComment'
import CommentsList from './CommentsList'
import { fetchComments } from '@/services/comments/getAllCommentsById'


interface CommentsContainerProps {
  project: ProjectType
}


const CommentsContainer: React.FC<CommentsContainerProps> = async ({ project }) => {

  let comments = await fetchComments(project._id);
  if (!comments) {
    return null
  }

  return (
    <Card className='sm:w-5/6 w-[95%] mt-8 rounded-none'>
      <CardHeader className='text-center'>Remarks </CardHeader>
      <CardContent>
        <PostComment projectId={project._id} />
        <CommentsList comments={comments} />
      </CardContent>

    </Card>
  )
}

export default CommentsContainer