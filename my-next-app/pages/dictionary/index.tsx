import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { Skeleton, TextField } from '@mui/material';
import { useMutation, useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { Response } from '@src/types/Response';
import { fetchSearchWordDictionary } from '@src/services';
import { IWord } from '@src/models/IWord';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@src/components/Layout';

const html = '';

interface WordDictionary {
  word: string;
}

function DictionaryPage() {
  const { register, handleSubmit } = useForm<WordDictionary>();

  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
  }, [router.query]);

  // const searchWord = useMutation<
  //   AxiosResponse<Response<IWord>>,
  //   AxiosError<Response>,
  //   WordDictionary
  // >(
  //   'search',
  //   (data) => {
  //     return fetchSearchWordDictionary(data.word);
  //   },
  //   {
  //     onSuccess(response) {
  //       console.log(response);
  //     },
  //     onError(error) {
  //       console.log(error);
  //     },
  //     onSettled() {
  //       const anchor = document.querySelectorAll('a');

  //       anchor.forEach((item) => item.setAttribute('href', '#'));
  //     }
  //   }
  // );

  const searchWord = useQuery<AxiosResponse<Response>, AxiosError<Response>>(
    ['word', router.query.word],
    async () =>
      fetchSearchWordDictionary(router?.query?.word?.toString() || ''),
    {
      enabled: !!router.query.word
    }
  );

  const submit = (data: WordDictionary) => {
    const params =
      // searchWord.mutate(data);
      router.push({
        pathname: router.pathname,
        query: {
          word: data.word
        }
      });
  };

  return (
    <>
      <Head>
        <title>Tra cuu tu dien</title>
      </Head>
      <Layout>
        <div>
          <div className="mx-10">
            <div className="mt-10 w-full flex justify-center">
              <form className="w-2/3" onSubmit={handleSubmit(submit)}>
                <TextField fullWidth {...register('word')} label="Từ" />
              </form>
            </div>
            <div>
              {/* <audio controls>
            <source
              src="https://stream-dict-laban.zdn.vn/us/8edeb4cdca0b67e0722652f7b56c208f/17bfdca680e/T/table.mp3"
              type="audio/ogg"
            />
            Your browser does not support the audio element.
          </audio> */}

              {/* <audio controls>
            <source
              src="https://stream-dict-laban.zdn.vn/us/8edeb4cdca0b67e0722652f7b56c208f/17bfdca680e/T/table.mp3"
              type="audio/ogg"
            />
            Your browser does not support the audio element.
          </audio> */}
            </div>

            {searchWord.isLoading && <Skeleton />}
            <div
              dangerouslySetInnerHTML={{
                __html: searchWord?.data?.data?.data?.content || html
              }}
            ></div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default DictionaryPage;
